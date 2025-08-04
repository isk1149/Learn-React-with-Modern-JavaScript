interface ListItemInterface {
  id: number;
  name: string;
  email: string;
}

export const ListItem = (props: ListItemInterface) => {
  const { id, name, email } = props;
  return (
    <p>
      {id}: {name}({email})
    </p>
  );
};
