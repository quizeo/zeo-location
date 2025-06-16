import "./Avatar.css";

interface AvatarProps {
  className?: string;
  style?: React.CSSProperties;
  image: string;
  alt: string;
  width: number | string;
}

const Avatar = (props: AvatarProps) => {
  return (
    <div className={`avatar ${props.className}`} style={props.style}>
      <img
        src={props.image}
        alt={props.alt}
        style={{ width: props.width, height: props.width }}
      />
    </div>
  );
};

export default Avatar;
