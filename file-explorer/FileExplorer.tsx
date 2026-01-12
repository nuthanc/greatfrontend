import { useState } from 'react';

// type Identifier = {
//   id: number,
//   name: string
// }

// type Folder = Identifier & {
//   children?: Identifier
// }
export default function FileExplorer({ data }) {
  data.sort(sortFn);
  return (
    <div>
      {data.map((obj) => {
        // Can extract later to File and Folder components
        const isFolder = 'children' in obj;
        return isFolder ? (
          <Folder key={obj.id} obj={obj} />
        ) : (
          <File key={obj.id} obj={obj} />
        );
      })}
    </div>
  );
}

const Folder = ({ obj }) => {
  const [collapsed, setCollapsed] = useState(true);
  const sign = collapsed ? '+' : '-';

  const onSignClick = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div>
      <div style={{ fontWeight: 'bold' }}>
        <span>{obj.name}</span>
        <span onClick={onSignClick} style={{ cursor: 'pointer' }}>
          &nbsp;[{sign}]
        </span>
      </div>

      {!collapsed && (
        <div style={{ marginLeft: '10px' }}>
          <FileExplorer data={obj.children} />
        </div>
      )}
    </div>
  );
};

const File = ({ obj }) => {
  return (
    <div>
      <span>{obj.name}</span>
    </div>
  );
};

const sortFn = (first, second) => {
  if (
    ('children' in first && 'children' in second) ||
    (!('children' in first) && !('children' in second))
  ) {
    const name1 = first.name as string;
    const name2 = second.name as string;
    return name1.localeCompare(name2);
  }
  return 'children' in first ? -1 : 1;
};
