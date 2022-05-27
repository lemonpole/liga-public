import React from 'react';
import Fade from 'react-reveal/Fade';
import useProgressiveImg from 'hooks/progressive-image';
import './billboard.css';


interface BillboardImageProps {
  imgTiny: string;
  img: string;
  imgLabel?: string;
  video?: string;
  videoType?: string;
}


interface Props extends Partial<BillboardImageProps> {
  title: string;
  children: React.ReactNode;
  reverse?: boolean;
}


function BillboardImage( props: BillboardImageProps ) {
  const [ imgSrc, { imgBlur }] = useProgressiveImg( props.imgTiny, props.img );

  return (
    <img
      src={imgSrc}
      alt={props.imgLabel || 'LIGA Esports Manager'}
      className={imgBlur ? 'blur' : 'glow'}
    />
  );
}


export default function Billboard( props: Props ) {
  const items = [
    <article className={`info ${!props.img && !props.video ? 'full' : ''}`}>
      <h2>{props.title}</h2>
      {props.children}
    </article>
  ];

  if( props.img ) {
    items.push( <article><BillboardImage {...( props as BillboardImageProps )} /></article> );
  }

  if( props.video ) {
    items.push( <article><video autoPlay muted loop playsInline><source src={props.video} type={props.videoType}/></video></article> );
  }

  return (
    <section className="billboard">
      <Fade bottom>
        {items.length > 1
          ? props.reverse ? items.reverse() : items
          : items[ 0 ]
        }
      </Fade>
    </section>
  );
}
