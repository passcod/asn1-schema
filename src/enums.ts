export enum Asn1TypeTypes {
  Sequence,
  Set,
  Choice,
}

// TODO: use ASN1 tag number value for Enum
// NOTE: use names of classes from asn1js module
//       createAsn1Schema uses Asn1PropType names for asn1js class initialization
export enum Asn1PropTypes {
  Any,
  Boolean,
  OctetString,
  BitString,
  Integer,
  Enumerated,
  ObjectIdentifier,
  Utf8String,
  BmpString,
  UniversalString,
  NumericString,
  PrintableString,
  TeletexString,
  VideotexString,
  IA5String,
  GraphicString,
  VisibleString,
  GeneralString,
  CharacterString,
  UTCTime,
  GeneralizedTime,
  DATE,
  TimeOfDay,
  DateTime,
  Duration,
  TIME,
  Null,
}
