import { DisplayDensity, GridColumnDataType, IgrClipboardOptions, IgrColumn, IgrGrid } from "@infragistics/igniteui-react-grids";

const sampleData = [
  { id: 1, name: "ボブ", age: 30, jobTitle: "開発者" },
  { id: 2, name: "アリス", age: 25, jobTitle: "サポート" },
  { id: 3, name: "ジョン", age: 40, jobTitle: "マネージャー" },
  { id: 4, name: "エミリー", age: 35, jobTitle: "マーケティング" },
  { id: 5, name: "デイビッド", age: 28, jobTitle: "営業" },
];

const clipboardOptions: IgrClipboardOptions = {
  enabled: true,
  copyHeaders: false,
  copyFormatters: true,
  separator: "\t",
};

export const App = () => {
  return (
    <div style={{ maxWidth: "600px", margin: "24px auto" }}>
      <IgrGrid
        data={sampleData}
        primaryKey="id"
        width="100%"
        height="300px"
        displayDensity={DisplayDensity.Cosy}
        clipboardOptions={clipboardOptions}
      >
        <IgrColumn field="name" header="名前" />
        <IgrColumn field="age" header="年齢" dataType={GridColumnDataType.Number} />
        <IgrColumn field="jobTitle" header="職種" />
      </IgrGrid>
    </div>
  );
};
