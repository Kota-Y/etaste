class SuperKlass {
    static get CONST() {
        return Object.assign(super.CONST || {}, {
            DOMAIN : 'http://127.0.0.1:8084',
        });
    }
}
export default SuperKlass;

/* ストアとユーザーの判別をする(仮) */
export const isStore = false;

/* ユーザーのログイン状態の判断(仮) */
export const isLogin =　false;