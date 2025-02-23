import type { Meta, StoryObj } from "@storybook/react";
import CardDetailView from "components/CardDetailView/CardDetailView";
import { CREDIT_CARD_COMPANY } from "types/card";

const meta = {
  component: CardDetailView,
  title: "CardDetailView",
  tags: ["autodocs"],
} satisfies Meta<typeof CardDetailView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    creditcard: {
      originNumber: "",
      displayNumber: "",
      cardDate: "",
      cardOwnerName: "",
      cardCVC: "",
      cardPassword: ["", ""],
      isValid: false,
      cardCompany: null,
    },
  },
};

export const BCCard: Story = {
  args: {
    creditcard: {
      originNumber: "1234567812345678",
      displayNumber: "1234-5678-••••-••••",
      cardDate: "01/30",
      cardOwnerName: "홍길동",
      cardCVC: "123",
      cardPassword: ["1", "2"],
      isValid: true,
      cardCompany: CREDIT_CARD_COMPANY.BC_CARD,
    },
  },
};

export const HanaCard: Story = {
  args: {
    creditcard: {
      originNumber: "1234567812345678",
      displayNumber: "1234-5678-••••-••••",
      cardDate: "01/30",
      cardOwnerName: "홍길동",
      cardCVC: "123",
      cardPassword: ["1", "2"],
      isValid: true,
      cardCompany: CREDIT_CARD_COMPANY.HANA_CARD,
    },
  },
};

export const HyundaiCard: Story = {
  args: {
    creditcard: {
      originNumber: "1234567812345678",
      displayNumber: "1234-5678-••••-••••",
      cardDate: "01/30",
      cardOwnerName: "홍길동",
      cardCVC: "123",
      cardPassword: ["1", "2"],
      isValid: true,
      cardCompany: CREDIT_CARD_COMPANY.HYUNDAI_CARD,
    },
  },
};

export const KakaoBank: Story = {
  args: {
    creditcard: {
      originNumber: "1234567812345678",
      displayNumber: "1234-5678-••••-••••",
      cardDate: "01/30",
      cardOwnerName: "홍길동",
      cardCVC: "123",
      cardPassword: ["1", "2"],
      isValid: true,
      cardCompany: CREDIT_CARD_COMPANY.KAKAOBANK,
    },
  },
};

export const KookminCard: Story = {
  args: {
    creditcard: {
      originNumber: "1234567812345678",
      displayNumber: "1234-5678-••••-••••",
      cardDate: "01/30",
      cardOwnerName: "홍길동",
      cardCVC: "123",
      cardPassword: ["1", "2"],
      isValid: true,
      cardCompany: CREDIT_CARD_COMPANY.KOOKMIN_CARD,
    },
  },
};

export const LotteCard: Story = {
  args: {
    creditcard: {
      originNumber: "1234567812345678",
      displayNumber: "1234-5678-••••-••••",
      cardDate: "01/30",
      cardOwnerName: "홍길동",
      cardCVC: "123",
      cardPassword: ["1", "2"],
      isValid: true,
      cardCompany: CREDIT_CARD_COMPANY.LOTTE_CARD,
    },
  },
};

export const ShinhanCard: Story = {
  args: {
    creditcard: {
      originNumber: "1234567812345678",
      displayNumber: "1234-5678-••••-••••",
      cardDate: "01/30",
      cardOwnerName: "홍길동",
      cardCVC: "123",
      cardPassword: ["1", "2"],
      isValid: true,
      cardCompany: CREDIT_CARD_COMPANY.SHINHAN_CARD,
    },
  },
};

export const WooriCard: Story = {
  args: {
    creditcard: {
      originNumber: "1234567812345678",
      displayNumber: "1234-5678-••••-••••",
      cardDate: "01/30",
      cardOwnerName: "홍길동",
      cardCVC: "123",
      cardPassword: ["1", "2"],
      isValid: true,
      cardCompany: CREDIT_CARD_COMPANY.WOORI_CARD,
    },
  },
};
