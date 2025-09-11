
/**
 * 베스트 상품 컨텐츠 컴포넌트
 */
export function BestProductContent({title, sale, price, icon}) {
    return (
        <div className="best-product-content">
            <p className="best-product-content-title">{title}</p>
            <span className="best-product-content-sale">{sale}</span>
            <span className="best-product-content-price">{price}</span>
            <span className="best-product-content-like">{icon}</span>
        </div>
    );
}
