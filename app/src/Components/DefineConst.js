class SuperKlass {
    static get CONST() {
        return Object.assign(super.CONST || {}, {
            DOMAIN : 'http://127.0.0.1:8084',
        });
    }
}

export const maximanPrice = Number(700);
export const minimamPrice = Number(250);

/*
class SubKlass extends SuperKlass {
    static get CONST() {
        return Object.assign(super.CONST || {}, {
            PIYO : 4,
            PON : 5
        });
    }
}*/

export default SuperKlass;