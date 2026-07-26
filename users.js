// users.js
const USER_DB = {};
for (let i = 1; i <= 500; i++) {
    let u = 'Stu' + String(i).padStart(3, '0');
    USER_DB[u] = ((i * 9973 + 1234567) % 899999 + 100000).toString();
}
USER_DB["admin"] = "888888";
window.checkUser = function(u, p) {
    return USER_DB[u] && USER_DB[u] === p;
};