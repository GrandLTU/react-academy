export default search => search.replace(/^\?/, '').split('&').reduce((query, param) => {
    const [name, value] = param.split('=');
    if (!name) {
        return;
    }

    query[name] = value;

    return query;
}, {});
