import { CellType, RowType } from '~/model';

export class ApplicationBoard {
  private readonly linesAmount: number;
  public readonly rows: RowType[] = [];

  constructor(linesAmount: number) {
    this.linesAmount = linesAmount;
    this.initCells();
  }

  private initCells() {
    for (let c = 1; c <= this.linesAmount; c++) {
      const row: CellType[] = [];

      for (let r = 1; r <= this.linesAmount; r++) {
        row.push({ row: r, column: c, id: crypto.randomUUID() });
      }
      this.rows.push({ row, rowId: crypto.randomUUID() });
    }
  }
}
