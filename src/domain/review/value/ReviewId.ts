export class ReviewId {
    private readonly id: string;

    // プライベートコンストラクタで直接のインスタンス生成を禁止
    private constructor(id: string) {
        if (!id || id.trim() === "") {
            throw new Error("ReviewId cannot be null or empty.");
        }
        this.id = id;
    }

    // ファクトリーメソッドでUUIDを生成
    public static generate(): ReviewId {
        const uuid = crypto.randomUUID(); // Node.js v14.17.0以降で使用可能
        return new ReviewId(uuid);
    }

    // ファクトリーメソッドで既存のIDから生成
    public static fromString(id: string): ReviewId {
        return new ReviewId(id);
    }

    // IDの値を取得
    public getValue(): string {
        return this.id;
    }

    // 値オブジェクトとしての等価性を確認
    public equals(other: ReviewId): boolean {
        return this.id === other.id;
    }

    // デバッグやログ用
    public toString(): string {
        return `ReviewId(${this.id})`;
    }
}
