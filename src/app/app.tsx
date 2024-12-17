import { useRef } from "react";
import { IgrColumn, IgrGrid, FilterMode } from "@infragistics/igniteui-react-grids";
import { sampleData } from "./appData";
export const App = () => {
  // グリッドの参照を作成します
  const gridRef = useRef<IgrGrid>(null);
  // フィルタリングが完了したときに呼び出されます
  function OnFilteringDone() {
    const grid = gridRef.current;
    if (grid) {
      const currentData = grid.dataView; // ページに表示されているデータを取得します
      console.log("Filtering Done Data View:\n", JSON.stringify(currentData, null, 2)); // フィルター後のデータを表示します
    }
  }
  return (
    <div style={{ maxWidth: "600px", margin: "24px auto" }}>
      <IgrGrid
        height="300px"
        ref={gridRef}
        data={sampleData}
        primaryKey="id"
        width="100%"
        style={{ "--ig-size": "var(--ig-size-small)" }}
        allowFiltering="true"
        filterMode={FilterMode.ExcelStyleFilter}
        filteringDone={OnFilteringDone} // フィルタリングが完了したときに呼び出されます
      >
        <IgrColumn field="id" header="ID" sortable />
        <IgrColumn field="name" header="Name" sortable />
        <IgrColumn field="country" header="Country" />
        <IgrColumn field="age" header="Age" dataType="number" sortable />
      </IgrGrid>
    </div>
  );
};
