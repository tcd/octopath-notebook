export const compact = (obj: Object) => {
    return Object.fromEntries(
        Object.entries(obj).filter(
            ([_, v]) => v != null && v != undefined
        )
    )
}
