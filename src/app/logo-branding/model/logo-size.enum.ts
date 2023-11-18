export const LogoSize = {
    small: "small",
    medium: "medium",
    large: "large"
} as const

export type LogoSizes = typeof LogoSize[keyof typeof LogoSize]
