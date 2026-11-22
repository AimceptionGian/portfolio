import paper from '../images/white.jpg';
import Nav, { SlideButton } from '../components/Nav';

function Name() {
  return (
    <>
      <span className='hero__first'>Gian</span>
      <span className='hero__last'>Oechslin</span>
    </>
  );
}

export default function Home() {
  return (
    <main className='home'>
      <Nav home />

      <div className='home__paper' style={{ backgroundImage: `url(${paper})` }} aria-hidden='true' />

      {/* Der Name liegt zweimal übereinander: hell über der dunklen Fläche,
          dunkel über dem Papier. Die Trennlinie folgt exakt der Flächengrenze. */}
      <h1 className='hero__name'>
        <span className='hero__layer hero__layer--light'><Name /></span>
        <span className='hero__layer hero__layer--dark' aria-hidden='true'><Name /></span>
      </h1>

      <div className='home__cta'>
        <span className='eyebrow'>Portfolio</span>
        <p>Interessiert an einer Zusammenarbeit oder haben Sie Fragen?</p>
        <SlideButton to='/Kontakt' variant='light'>Kontakt</SlideButton>
      </div>
    </main>
  );
}
