import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { Component, inject, input, output, signal } from '@angular/core'
import { ButtonModule } from 'primeng/button'
import {
    FileRemoveEvent,
    FileSelectEvent,
    FileUploadEvent,
    FileUploadHandlerEvent,
    FileUploadModule,
} from 'primeng/fileupload'
import { ProgressBarModule } from 'primeng/progressbar'
import { ToastModule } from 'primeng/toast'
import { PrimeNGConfig } from 'primeng/api'
import { Constants } from 'src/app/api/config/constant'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import {
    faCloudUpload,
    faImage,
    faTimesCircle,
} from '@fortawesome/free-solid-svg-icons'
import { ImageModule } from 'primeng/image'
import { GambarService } from 'src/app/api/admin/shared/gambar/gambar.service'

@Component({
    selector: 'image-uploader',
    standalone: true,
    imports: [
        ButtonModule,
        FileUploadModule,
        FontAwesomeModule,
        ImageModule,
        ProgressBarModule,
        ToastModule,
        HttpClientModule,
        CommonModule,
    ],
    templateUrl: './image-uploader.component.html',
    styleUrl: './image-uploader.component.scss',
})
export class ImageUploaderComponent {
    isSupportMultipleFiles = input.required<boolean>()
    isImageMustContain = input<boolean>(false)
    isUploadFinished = signal<boolean>(false)
    imagePlaceholder = input<string>()
    gambarIDs = output<string[]>()

    private gambarService = inject(GambarService)

    files = []
    uploadedFiles = []
    totalSize: number = 0
    totalSizePercent: number = 0
    baseURL: string = Constants.API_ENDPOINT
    uploadURL = `${this.baseURL}/gambar/upload`
    iconRemove = faTimesCircle
    iconUpload = faCloudUpload
    iconImage = faImage
    title = 'Daftar Gambar Dipilih'

    constructor (private config: PrimeNGConfig) {}

    choose (callback: VoidFunction) {
        this.isUploadFinished.set(false)
        callback()
    }

    onRemoveTemplatingFile (fileIndex: number, file: File) {
        if (this.files[fileIndex]) {
            this.files.splice(fileIndex, 1)
        }

        this.totalSize -= parseInt(this.formatSize(file.size))
        this.totalSizePercent = this.totalSize / 10
    }

    onTemplatedUpload (event: FileUploadEvent) {
        this.title = 'Gambar Telah Terunggah'
        this.isUploadFinished.set(true)

        this.uploadedFiles = event.files
    }

    onSelectedFiles (event: FileSelectEvent) {
        this.files = event.currentFiles
        this.files.forEach(file => {
            this.totalSize += parseInt(this.formatSize(file.size))
        })
        this.totalSizePercent = this.totalSize / 10
    }

    async onUploadManually (event: FileUploadHandlerEvent) {
        await this.gambarService.uploadGambar(event.files).then(response => {
            this.gambarIDs.emit(response)
            this.uploadedFiles = event.files
            this.isUploadFinished.set(true)
        })
    }

    uploadEvent (callback: VoidFunction) {
        callback()
    }

    formatSize (bytes: number) {
        const k = 1024
        const dm = 3
        const sizes = this.config.translation.fileSizeTypes
        if (bytes === 0) {
            return `0 ${sizes[0]}`
        }

        const i = Math.floor(Math.log(bytes) / Math.log(k))
        const formattedSize = parseFloat((bytes / Math.pow(k, i)).toFixed(dm))
        const intSize = Math.floor(formattedSize)

        return `${intSize} ${sizes[i]}`
    }
}
