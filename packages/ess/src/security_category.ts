import { AsnProp, AsnPropTypes, AsnType, AsnTypeTypes, AsnArray } from '@peculiar/asn1-schema';

/**
 * ```
 * SecurityCategory ::= SEQUENCE {
 *   type  [0] OBJECT IDENTIFIER,
 *   value [1] ANY DEFINED BY type -- defined by type
 * }
 * ```
 */
export class SecurityCategory {
    @AsnProp({ type: AsnPropTypes.ObjectIdentifier, context: 0, implicit: true })
    public type: string = '';

    @AsnProp({ type: AsnPropTypes.Any, context: 1, implicit: true })
    public value: ArrayBuffer = new ArrayBuffer(0);

    constructor(params: Partial<SecurityCategory> = {}) {
        Object.assign(this, params);
    }
}

/**
 * ```
 * SecurityCategories ::= SET SIZE (1..ub-security-categories) OF
 *         SecurityCategory
 * ```
 * @todo - implement size constraint
 */
@AsnType({ type: AsnTypeTypes.Set, itemType: SecurityCategory })
export class SecurityCategories extends AsnArray<SecurityCategory> {
    constructor(items?: SecurityCategory[]) {
        super(items);

        // Set the prototype explicitly.
        Object.setPrototypeOf(this, SecurityCategories.prototype);
    }
}
