import React, { useRef } from "react";

import CardNumberInput from "./CardNumberInput/CardNumberInput";
import CardDateInput from "./CardDateInput/CardDateInput";
import CardOwnerNameInput from "./CardOwnerNameInput/CardOwnerNameInput";
import CardCVCInput from "./CardCVCInput/CardCVCInput";
import CardPasswordInput from "./CardPasswordInput/CardPasswordInput";

import St from "./CardDetailFormStyled";

type CardDetailFormProps = {
  submitCreditCard: (e: React.FormEvent<HTMLFormElement>) => void;
};

function CardDetailForm({ submitCreditCard }: CardDetailFormProps) {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  return (
    <St.Form onSubmit={submitCreditCard}>
      <CardNumberInput inputRefs={inputRefs} />
      <CardDateInput inputRefs={inputRefs} />
      <CardOwnerNameInput inputRefs={inputRefs} />
      <CardCVCInput inputRefs={inputRefs} />
      <CardPasswordInput inputRefs={inputRefs} />
      <St.SubmitButton type="submit" value={"다음"} />
    </St.Form>
  );
}

export default CardDetailForm;
