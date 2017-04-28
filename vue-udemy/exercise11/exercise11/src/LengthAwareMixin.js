export const lengthAwareMixin = {
    computed: {
            calculateLength() {
                return this.testStringToReverse + this.testStringToReverse.length;
            }
        }
};