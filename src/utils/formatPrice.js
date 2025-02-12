export const formatPrice = (price, currency, locale = 'id-ID') => {
    return `${currency}${price.toLocaleString(locale, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
};
