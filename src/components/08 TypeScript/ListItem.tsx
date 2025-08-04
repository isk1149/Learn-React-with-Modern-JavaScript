import type { Comment } from "../../interfaces/comment";

export const ListItem = (props: Comment) => {
  const { id, name, email, body } = props;
  return (
    <p>
      {id}: {name}({email}) / {body?.concat("!")}
    </p>
  );
};
