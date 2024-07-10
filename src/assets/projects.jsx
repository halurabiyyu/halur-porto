import ProjectImg from './project-test-img.png';
import MamCatering from './mam_catering.png';
import SIRW03Thumbnail from './sirw_thumbnail.png';

export default function projects() {
    const data = [
        {
            name: 'SIRW03 - Web Apps',
            img: SIRW03Thumbnail,
            desc: 'Sistem Informasi Rukun Warga 03 Mergosono berbasis aplikasi web. '
        },
        {
            name: 'Mam Catering',
            img: MamCatering,
            desc: 'Point of Sales web apps for catering'
        }
    ];

    return data;
}