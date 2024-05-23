export const IconSize = {
    small: "small",
    medium: "medium",
    large: "large"
} as const

export type IconSizes = typeof IconSize[keyof typeof IconSize]
