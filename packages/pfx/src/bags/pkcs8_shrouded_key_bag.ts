import { EncryptedPrivateKeyInfo } from "@peculiar/asn1-pkcs8";
import { AsnType, AsnTypeTypes } from "@peculiar/asn1-schema";

/**
 * ```
 * PKCS8ShroudedKeyBag ::= EncryptedPrivateKeyInfo
 * ```
 */
@AsnType({ type: AsnTypeTypes.Sequence })
export class PKCS8ShroudedKeyBag extends EncryptedPrivateKeyInfo { }
