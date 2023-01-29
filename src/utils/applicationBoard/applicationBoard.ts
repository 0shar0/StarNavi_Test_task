import { ColumnsType } from '~/model';

export class Cell {
  public readonly row: number;
  public readonly column: number;
  public readonly id: string;
  public isHovered = false;

  constructor(column: number, row: number) {
    this.column = column;
    this.row = row;
    this.id = crypto.randomUUID();
  }
}

export class ApplicationBoard {
  private readonly linesAmount: number;
  public readonly columns: ColumnsType[] = [];

  constructor(linesAmount: number) {
    this.linesAmount = linesAmount;
    this.initCells();
  }

  private initCells() {
    for (let c = 1; c <= this.linesAmount; c++) {
      const column: Cell[] = [];

      for (let r = 1; r <= this.linesAmount; r++) {
        column.push(new Cell(c, r));
      }
      this.columns.push({ column, columnId: crypto.randomUUID() });
    }
  }
}
