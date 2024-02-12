import { Injectable } from "@angular/core"

@Injectable()
export class Constants {
    private readonly SERVER_URL = "https://dummyjson.com"
    public readonly API_ENDPOINT = this.SERVER_URL
    public readonly ICON_PREFIX = "fa-solid fa-"
}
