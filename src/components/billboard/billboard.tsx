import Fade from 'react-reveal/Fade';
import useProgressiveImg from 'hooks/progressive-image';
import './billboard.css';


interface Props {
  imgTiny: string;
  img: string;
  title: string;
  imgLabel?: string;
  children: React.ReactNode;
  reverse?: boolean;
}


export default function Billboard( props: Props ) {
  const [ imgSrc, { imgBlur }] = useProgressiveImg( props.imgTiny, props.img );

  const items = [
    <article className="info">
      <h2>{props.title}</h2>
      <p>{props.children}</p>
    </article>,
    <article>
      <img
        src={imgSrc}
        alt={props.imgLabel || 'LIGA Esports Manager'}
        className={imgBlur ? 'blur' : ''}
      />
    </article>
  ];

  return (
    <section className="billboard">
      <Fade bottom>
        {props.reverse ? items.reverse() : items}
      </Fade>
    </section>
  );
}
