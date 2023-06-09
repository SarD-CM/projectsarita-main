import Image from 'next/image';
import mypic from '../public/Copia de Logo Borregos BLANCO.png'
 
const Logo = (props) => {
    return (
      <Image
        src={mypic}
        alt="Electraton Borregos CCM logo"
        width= {300}
        height= {200}
      />
    )}
export default Logo;