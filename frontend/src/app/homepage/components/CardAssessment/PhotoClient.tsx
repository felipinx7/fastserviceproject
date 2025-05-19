import Image from "next/image";
import { PerfilSemFoto } from "@/assets";

const Photo = () => {
    return ( 
        <Image src={PerfilSemFoto} width={120} height={12} alt="foto cliente"/>
     );
}
 
export default Photo;