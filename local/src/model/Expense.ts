import { Model } from "@nozbe/watermelondb";
import {
  field,
  text,
  date,
  readonly,
  relation,
} from "@nozbe/watermelondb/decorators";

export default class Expense extends Model {
  // 对应 schema 中的 'expenses' 表
  static table = "expenses";

  // 定义关联：这个账单属于哪个空间
  // @ts-ignore
  @relation("spaces", "space_id") space;

  // @ts-ignore
  @text("payer_id") payerId;

  // @ts-ignore
  @field("amount") amount;

  // @ts-ignore
  @text("description") description;

  // WatermelonDB 会自动管理的创建/更新时间
  // @ts-ignore
  @readonly @date("created_at") createdAt;

  // @ts-ignore
  @readonly @date("updated_at") updatedAt;
}
