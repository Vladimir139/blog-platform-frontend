export interface PostCardProps {
  image: string;
  firstname: string;
  surname: string;
  date: string;
  title: string;
  shortDesc: string;
  onEdit?: () => void;
  onClick?: () => void;
  onDelete?: () => void;
}
