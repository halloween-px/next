import { Navigation, Pagination } from 'swiper';
import { Swiper } from 'swiper/react';
import { EffectFade } from 'swiper';

//style
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SwiperLayout = (
    {
        items,
        margin,
        navigation,
        pagination,
        children,
        effect,
        navCustomized = {},
    }) => {

    const navCustom = () => {
        if (navCustomized) {
            return {
                prevEl: `${navCustomized.prev}`,
                nextEl: `${navCustomized.next}`,
            }
        }
        return (
            !!navigation && navigation
        )
    }

    const paginationType = () => {
        if(!pagination) return false;

        let type = pagination.type ? pagination.type : 'bullets',
            formatFractionCurrent = (num) => {return num},
            formatFractionTotal = (num) => {return num},
            renderFraction = '';

        if(pagination.fractionZero) {
            function addZero(num){
                return (num > 9) ? num : '0' + num;
            }

            formatFractionCurrent = function(num) {
                return addZero(num);
            };

            formatFractionTotal = function(num) {
                return addZero(num);
            }
        }

        if(pagination.fractionSegment) {
            renderFraction = (currentClass, totalClass) => {
                return `
                    <span class="pagination-fraction">
                        <span class="${currentClass}"></span>
                        <span class="line">
                            ${pagination.renderFraction ? pagination.renderFraction : ''}
                        </span>
                        <span class="${totalClass}"></span>
                    </span>
                `;
            }
        }
        return {
            el: `${pagination.el}`,
            type: type,
            formatFractionCurrent,
            formatFractionTotal,
            clickable: true,
            renderFraction: renderFraction,
        }
    }
    return (
        <Swiper
            modules={[Navigation, Pagination, EffectFade]}
            effect={effect ? effect : ''}
            spaceBetween={margin || margin === 0 ? margin : 12}
            slidesPerView={items ? items : 1}
            navigation={navCustom()}
            pagination={paginationType()}
            speed={1200}
        >
            {children}
        </Swiper>
    )
}

export default SwiperLayout;