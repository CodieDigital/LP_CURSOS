import { Error, Icon } from "infinity-forge";

interface IListProps {
  isUniqueLine?: boolean;
  items: { title?: string; description?: string }[];
}

export function List({ items, isUniqueLine = false }: IListProps) {
  if (!Array.isArray(items) || items.length === 0) return null;

  if (isUniqueLine) {
    return (
      <Error name="List">
        <ul className="list-unique-line">
          {items.map((item, index) => (
            <li key={index}>
              <Icon name="CheckListIcon" />

              <div className="font-16-regular content">
                <strong className="font-18-bold">{item.title}</strong>

                {item.description}
              </div>
            </li>
          ))}
        </ul>
      </Error>
    );
  }

  return (
    <Error name="List">
      <ul className="list-default">
        {items.map((item, index) => (
          <li key={index}>
            <div className="title">
              <Icon name="CheckListIcon" />

              <h3 className="font-18-bold">{item.title}</h3>
            </div>

            <div className="font-16-regular content">{item.description}</div>
          </li>
        ))}
      </ul>
    </Error>
  );
}
