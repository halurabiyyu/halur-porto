import MamCatering from './img/mam-catering-web.png';
import SIRW03Thumbnail from './img/sirw_thumbnail.png';
import LaundryThumbnail from './img/laundryPage.png';
import CatatuangmuThumbnail from './img/catatuangmu.png';

export default function projects() {
    const data = [
        {
            name: 'SIRW03 - Web Apps',
            img: SIRW03Thumbnail,
            desc: 'Sistem Informasi Rukun Warga 03 Mergosono berbasis aplikasi web.'
        },
        {
            name: 'Mam Catering',
            img: MamCatering,
            desc: 'Order Catering Web Apps.'
        },
        {
            name: 'L!aundry',
            img: LaundryThumbnail,
            desc: 'E-Laundry Landing Page.'
        },
        {
            name: 'Catat Uangmu',
            img: CatatuangmuThumbnail,
            desc: 'Budgeting Web Apps.'
        },
        
    ];

    return data;
}