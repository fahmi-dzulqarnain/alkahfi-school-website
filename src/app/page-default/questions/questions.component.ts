import { Component } from "@angular/core";

@Component({
    selector: 'questions',
    templateUrl: './questions.component.html',
    styleUrls: ['./questions.component.scss']
})

export class QuestionsComponent {
    judul = "Header Baru"
    gambar_tkit = 'assets/FI-TK@2x.png'

    toggleQuestion() {
        const toggleQues = (el: any, className: any) => el.classList.toggle(className)
        const toggleBtnIcon = (el: any, className: any) => el.classList.toggle(className);
        toggleQues(document.querySelector(".questions_content"), "active-questions")
        toggleBtnIcon(document.querySelector(".questions_header i"), "rotate")
    }

    // toggleTest() {
    //     /*Questions According*/
    //     const accordionItems = document.querySelectorAll('.questions_item')

    //     accordionItems.forEach((item) => {
    //         const toggleQues = (el: any, className: any) => el.classList.toggle(className)
    //         const toggleBtnIcon = (el: any, className: any) => el.classList.toggle(className);
    //         toggleQues(document.querySelector(".questions_content"), "active-questions")
    //         toggleBtnIcon(document.querySelector(".questions_header i"), "rotate")
    //     })

    // }
}
