export interface TCard <T> {
    title: string | T;
    description: string | T;
    isCompleted: string | T;
    onClik?: () => void
}