export default interface FeedMillsInterface {
    id: number;
    name: string;
    createdAt: Date;
    options: Array<{title: string, name: string}>
}
