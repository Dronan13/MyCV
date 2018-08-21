const isAdmin2 = (value) => {
    value = JSON.parse(value)
    return (
        value === undefined ||
        value === null ||
        (typeof value === 'object' && Object.keys(value).length === 0) ||
        (typeof value === 'string' && value.trim().length === 0)||
        value.permissions != 'admin'
    );
}
function isAdmin(value) {
    value = JSON.parse(value)
    return (
        value === undefined ||
        value === null ||
        (typeof value === 'object' && Object.keys(value).length === 0) ||
        (typeof value === 'string' && value.trim().length === 0)||
        value.permissions != 'admin'
    );
};

function requireAdmin(request, response, next) {
    if (isAdmin(request.headers.user)) {
        response.json({message: 'Permission denied.' });
    }
    else {
        next();
    }
};
module.exports = requireAdmin;