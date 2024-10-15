import { formatDistanceToNow } from 'date-fns';

const CreatedTime = ({createdAt}) => {
  return formatDistanceToNow(new Date(createdAt), { addSuffix: true });
};

export default CreatedTime