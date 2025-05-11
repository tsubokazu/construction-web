"use client";

import { useState } from "react";
import { useTheme } from "@emotion/react";
import { css } from "@emotion/react";
import {
  Typography,
  Form,
  Input,
  Select,
  Radio,
  Checkbox,
  Button,
  Row,
  Col,
  Card,
  Space,
  Result,
  Alert,
} from "antd";
import {
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
  FormOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/common/PageHeader";
import StyledSteps from "@/components/common/styled/StyledSteps";

const { Title, Text } = Typography;
const { TextArea } = Input;
const { Option } = Select;

// お問い合わせの種類
const inquiryTypes = [
  { value: "product", label: "製品・サービスについて" },
  { value: "price", label: "価格・見積もりについて" },
  { value: "technical", label: "技術的なご質問" },
  { value: "support", label: "サポートについて" },
  { value: "partnership", label: "協業・パートナーシップについて" },
  { value: "career", label: "採用について" },
  { value: "others", label: "その他" },
];

// オフィス情報
const offices = [
  {
    name: "東京本社",
    address: "東京都港区海岸1-2-3 ウォーターフロントビル",
    phone: "03-1234-5678",
    email: "info@aquatech.co.jp",
    hours: "平日 9:00〜18:00",
  },
  {
    name: "大阪支社",
    address: "大阪市中央区本町1-2-3 水都ビル5F",
    phone: "06-1234-5678",
    email: "osaka@aquatech.co.jp",
    hours: "平日 9:00〜18:00",
  },
  {
    name: "名古屋支社",
    address: "名古屋市中区栄3-4-5 名古屋水技術センター6F",
    phone: "052-123-4567",
    email: "nagoya@aquatech.co.jp",
    hours: "平日 9:00〜18:00",
  },
];

interface FormValues {
  name: string;
  company: string;
  department: string;
  email: string;
  phone: string;
  inquiryType: string;
  productInterest?: string[];
  inquiryDetails: string;
  referral?: string;
  acceptTerms: boolean;
}

export default function ContactPage() {
  const theme = useTheme();
  const [form] = Form.useForm<FormValues>();
  const [currentStep, setCurrentStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // スタイルの定義
  const styles = {
    section: css`
      padding: 60px 0;

      @media (max-width: 768px) {
        padding: 40px 0;
      }
    `,
    container: css`
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 16px;
    `,
    lightSection: css`
      background-color: ${theme.customColors.lightGray};
    `,
    infoCard: css`
      height: 100%;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
      margin: 8px;
      display: flex;
      flex-direction: column;

      .ant-card-body {
        padding: 32px;
        display: flex;
        flex-direction: column;
        height: 100%;
      }
    `,
    infoTitle: css`
      color: ${theme.customColors.waterDarkBlue};
      margin-bottom: 20px;
      font-size: 20px;
      font-weight: 600;
    `,
    infoItem: css`
      margin-bottom: 16px;
      display: flex;
      align-items: flex-start;

      .anticon {
        color: ${theme.customColors.waterBlue};
        margin-right: 12px;
        margin-top: 4px;
        font-size: 16px;
        flex-shrink: 0;
      }
    `,
    formContainer: css`
      background-color: white;
      padding: 40px;
      border-radius: 8px;
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
      margin: 8px;

      @media (max-width: 768px) {
        padding: 32px 24px;
      }
    `,
    formTitle: css`
      font-size: 26px;
      margin-bottom: 32px;
      color: ${theme.customColors.waterDarkBlue};
      position: relative;
      padding-bottom: 12px;
      
      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 60px;
        height: 3px;
        background-color: ${theme.customColors.waterBlue};
      }
    `,
    buttonContainer: css`
      margin-top: 40px;
      display: flex;
      justify-content: space-between;

      button {
        min-width: 120px;
        height: 44px;
        font-size: 16px;
      }

      @media (max-width: 576px) {
        flex-direction: column;
        gap: 16px;

        button {
          width: 100%;
        }
      }
    `,
    requiredMark: css`
      color: ${theme.token?.colorError || "red"};
      margin-right: 4px;
      font-weight: bold;
    `,
    formItem: css`
      margin-bottom: 24px;
      
      .ant-form-item-label > label {
        font-size: 16px;
        font-weight: 500;
        color: ${theme.customColors.waterDarkBlue};
      }
      
      .ant-input, .ant-select-selector, .ant-input-number, .ant-picker {
        padding: 12px;
        border-radius: 6px;
        font-size: 16px;
        border: 1px solid #d9d9d9;
        box-shadow: none;
        transition: all 0.3s;
        
        &:hover, &:focus {
          border-color: ${theme.customColors.waterBlue};
          box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.1);
        }
      }
      
      .ant-select-selector {
        height: auto !important;
        padding: 8px 12px !important;
      }
      
      .ant-checkbox-wrapper, .ant-radio-wrapper {
        font-size: 16px;
      }
      
      .ant-form-item-explain-error {
        margin-top: 4px;
        font-size: 14px;
      }
    `,
    termsLink: css`
      color: ${theme.customColors.waterBlue};
      text-decoration: underline;
    `,
  };

  // パンくずリストの項目
  const breadcrumbItems = [
    { title: "ホーム", href: "/" },
    { title: "お問い合わせ" },
  ];

  // フォーム送信時の処理
  const onFinish = (values: FormValues) => {
    console.log("Received values:", values);
    setLoading(true);

    // 送信処理をシミュレート
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  // Step1のコンテンツ（お客様情報）
  const renderStep1 = () => (
    <>
      <div css={styles.formItem}>
        <Form.Item
          name="name"
          label={
            <>
              <span css={styles.requiredMark}>*</span>お名前
            </>
          }
          rules={[{ required: true, message: "お名前を入力してください" }]}
        >
        <Input placeholder="例：山田 太郎" />
      </Form.Item>
      </div>

      <div css={styles.formItem}>
        <Form.Item name="company" label="会社名">
          <Input placeholder="例：株式会社〇〇" />
        </Form.Item>
      </div>

      <div css={styles.formItem}>
        <Form.Item name="department" label="部署名">
          <Input placeholder="例：技術部" />
        </Form.Item>
      </div>

      <div css={styles.formItem}>
        <Form.Item
          name="email"
          label={
            <>
              <span css={styles.requiredMark}>*</span>メールアドレス
            </>
          }
          rules={[
            { required: true, message: "メールアドレスを入力してください" },
            { type: "email", message: "有効なメールアドレスを入力してください" },
          ]}
        >
          <Input placeholder="例：sample@example.com" />
        </Form.Item>
      </div>

      <div css={styles.formItem}>
        <Form.Item name="phone" label="電話番号">
          <Input placeholder="例：03-1234-5678" />
        </Form.Item>
      </div>
    </>
  );

  // Step2のコンテンツ（お問い合わせ内容）
  const renderStep2 = () => (
    <>
      <div css={styles.formItem}>
        <Form.Item
          name="inquiryType"
          label={
            <>
              <span css={styles.requiredMark}>*</span>お問い合わせの種類
            </>
          }
          rules={[
            { required: true, message: "お問い合わせの種類を選択してください" },
          ]}
        >
          <Radio.Group>
            <Space direction="vertical">
              {inquiryTypes.map((type) => (
                <Radio key={type.value} value={type.value}>
                  {type.label}
                </Radio>
              ))}
            </Space>
          </Radio.Group>
        </Form.Item>
      </div>

      <div css={styles.formItem}>
        <Form.Item
          name="productInterest"
          label="ご興味のある製品・サービス"
          dependencies={["inquiryType"]}
        >
          <Select
            mode="multiple"
            placeholder="ご興味のある製品・サービスを選択してください"
            options={[
              { value: "water_treatment", label: "浄水処理システム" },
              { value: "water_recycling", label: "水資源リサイクル" },
              { value: "maintenance", label: "メンテナンスサービス" },
              { value: "industrial", label: "産業用水処理" },
              { value: "municipal", label: "自治体向けソリューション" },
            ]}
          />
        </Form.Item>
      </div>

      <div css={styles.formItem}>
        <Form.Item
          name="inquiryDetails"
          label={
            <>
              <span css={styles.requiredMark}>*</span>お問い合わせ内容
            </>
          }
          rules={[
            { required: true, message: "お問い合わせ内容を入力してください" },
          ]}
        >
          <TextArea
            rows={6}
            placeholder="お問い合わせ内容をご記入ください"
          />
        </Form.Item>
      </div>

      <div css={styles.formItem}>
        <Form.Item name="referral" label="当社を知ったきっかけ">
          <Select placeholder="選択してください">
            <Option value="search">検索エンジン</Option>
            <Option value="sns">SNS</Option>
            <Option value="exhibition">展示会・セミナー</Option>
            <Option value="recommendation">知人の紹介</Option>
            <Option value="business">取引先からの紹介</Option>
            <Option value="other">その他</Option>
          </Select>
        </Form.Item>
      </div>
    </>
  );

  // Step3のコンテンツ（確認）
  const renderStep3 = () => {
    const values = form.getFieldsValue();

    const getInquiryTypeLabel = (value: string) => {
      const type = inquiryTypes.find((t) => t.value === value);
      return type ? type.label : "";
    };

    return (
      <>
        <Alert
          message="送信前に入力内容をご確認ください"
          type="info"
          showIcon
          style={{ marginBottom: 32, fontSize: '16px', padding: '16px' }}
        />

        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: '16px' }}>
          <tbody>
            <tr style={{ borderBottom: "1px solid #f0f0f0" }}>
              <th
                style={{ padding: "16px 0", textAlign: "left", width: "30%", color: "#0c4da2", fontWeight: 600 }}
              >
                お名前
              </th>
              <td style={{ padding: "16px 0" }}>{values.name}</td>
            </tr>
            <tr style={{ borderBottom: "1px solid #f0f0f0" }}>
              <th style={{ padding: "16px 0", textAlign: "left", color: "#0c4da2", fontWeight: 600 }}>会社名</th>
              <td style={{ padding: "16px 0" }}>{values.company || "—"}</td>
            </tr>
            <tr style={{ borderBottom: "1px solid #f0f0f0" }}>
              <th style={{ padding: "16px 0", textAlign: "left", color: "#0c4da2", fontWeight: 600 }}>部署名</th>
              <td style={{ padding: "16px 0" }}>{values.department || "—"}</td>
            </tr>
            <tr style={{ borderBottom: "1px solid #f0f0f0" }}>
              <th style={{ padding: "16px 0", textAlign: "left", color: "#0c4da2", fontWeight: 600 }}>
                メールアドレス
              </th>
              <td style={{ padding: "16px 0" }}>{values.email}</td>
            </tr>
            <tr style={{ borderBottom: "1px solid #f0f0f0" }}>
              <th style={{ padding: "16px 0", textAlign: "left", color: "#0c4da2", fontWeight: 600 }}>
                電話番号
              </th>
              <td style={{ padding: "16px 0" }}>{values.phone || "—"}</td>
            </tr>
            <tr style={{ borderBottom: "1px solid #f0f0f0" }}>
              <th style={{ padding: "16px 0", textAlign: "left", color: "#0c4da2", fontWeight: 600 }}>
                お問い合わせの種類
              </th>
              <td style={{ padding: "16px 0" }}>
                {getInquiryTypeLabel(values.inquiryType)}
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid #f0f0f0" }}>
              <th style={{ padding: "16px 0", textAlign: "left", color: "#0c4da2", fontWeight: 600 }}>
                お問い合わせ内容
              </th>
              <td style={{ padding: "16px 0", whiteSpace: "pre-wrap" }}>
                {values.inquiryDetails}
              </td>
            </tr>
          </tbody>
        </table>

        <div css={styles.formItem} style={{ marginTop: 32 }}>
          <Form.Item
            name="acceptTerms"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(
                        new Error("プライバシーポリシーに同意してください")
                      ),
              },
            ]}
          >
          <Checkbox>
            <span>
              <a
                href="/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                css={styles.termsLink}
              >
                プライバシーポリシー
              </a>
              に同意します
            </span>
          </Checkbox>
        </Form.Item>
        </div>
      </>
    );
  };

  // 次のステップへ
  const nextStep = async () => {
    try {
      if (currentStep === 0) {
        await form.validateFields(["name", "email"]);
      } else if (currentStep === 1) {
        await form.validateFields(["inquiryType", "inquiryDetails"]);
      }
      setCurrentStep(currentStep + 1);
    } catch (error) {
      console.log("Validation failed:", error);
    }
  };

  // 前のステップへ
  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  // 送信完了後の表示
  const renderSuccess = () => (
    <Result
      status="success"
      title="お問い合わせを受け付けました"
      subTitle="担当者より営業日3日以内にご連絡いたします。今しばらくお待ちください。"
      icon={<CheckCircleOutlined style={{ fontSize: '72px', color: theme.customColors.waterBlue }} />}
      style={{
        padding: '40px 20px',
        background: '#f8f9fa',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
      }}
      extra={[
        <Button
          type="primary"
          key="home"
          onClick={() => (window.location.href = "/")}
          size="large"
          style={{
            height: '48px',
            fontSize: '16px',
            padding: '0 32px',
            marginTop: '24px',
          }}
        >
          トップページへ戻る
        </Button>,
      ]}
    />
  );

  // ステップに応じたコンテンツを表示
  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return renderStep1();
      case 1:
        return renderStep2();
      case 2:
        return renderStep3();
      default:
        return null;
    }
  };

  return (
    <MainLayout>
      {/* ページヘッダー */}
      <PageHeader
        title="お問い合わせ"
        description="製品・サービスに関するお問い合わせ、お見積もりのご依頼など、お気軽にご連絡ください。担当者より迅速にご返答いたします。"
        breadcrumbItems={breadcrumbItems}
      />

      {/* お問い合わせフォームセクション */}
      <section css={styles.section}>
        <div css={styles.container}>
          <Row gutter={[40, 40]} justify="center">
            <Col xs={24} md={20} lg={16} xl={14}>
              <div css={styles.formContainer}>
                {submitted ? (
                  renderSuccess()
                ) : (
                  <>
                    <Title level={3} css={styles.formTitle}>
                      お問い合わせフォーム
                    </Title>

                    <div style={{ marginBottom: 40 }}>
                      <StyledSteps
                        current={currentStep}
                        items={[
                          {
                            title: "お客様情報",
                            icon:
                              currentStep === 0 ? (
                                <FormOutlined style={{ fontSize: '18px' }} />
                              ) : (
                                <CheckCircleOutlined style={{ fontSize: '18px' }} />
                              ),
                          },
                          {
                            title: "お問い合わせ内容",
                            icon:
                              currentStep === 1 ? (
                                <FormOutlined style={{ fontSize: '18px' }} />
                              ) : currentStep > 1 ? (
                                <CheckCircleOutlined style={{ fontSize: '18px' }} />
                              ) : null,
                          },
                          {
                            title: "確認・送信",
                            icon: currentStep === 2 ? <FormOutlined style={{ fontSize: '18px' }} /> : null,
                          },
                        ]}
                      />
                    </div>

                    <Form
                      form={form}
                      layout="vertical"
                      onFinish={onFinish}
                      requiredMark={false}
                      scrollToFirstError
                      className="contact-form"
                    >
                      {renderStepContent()}

                      <div css={styles.buttonContainer}>
                        {currentStep > 0 && (
                          <Button onClick={prevStep}>戻る</Button>
                        )}

                        {currentStep < 2 ? (
                          <Button type="primary" onClick={nextStep}>
                            次へ
                          </Button>
                        ) : (
                          <Button
                            type="primary"
                            htmlType="submit"
                            loading={loading}
                          >
                            送信する
                          </Button>
                        )}
                      </div>
                    </Form>
                  </>
                )}
              </div>
            </Col>
          </Row>
          
          {/* オフィス情報セクション */}
          <div style={{ marginTop: 60, maxWidth: 1000, margin: '60px auto 80px' }}>
            <Title level={3} css={styles.formTitle} style={{ marginBottom: 40 }}>
              各担当オフィスのご案内
            </Title>
            <Row gutter={[24, 24]} justify="center">
              {offices.map((office, index) => (
                <Col xs={24} md={8} key={index}>
                  <Card css={styles.infoCard} hoverable variant="outlined" bodyStyle={{ height: '100%', padding: '32px', display: 'flex', flexDirection: 'column' }}>
                    <Title level={4} css={styles.infoTitle}>
                      {office.name}
                    </Title>

                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                      <div style={{ marginBottom: 'auto' }}>
                        <div css={styles.infoItem}>
                          <EnvironmentOutlined />
                          <div>{office.address}</div>
                        </div>

                        <div css={styles.infoItem}>
                          <PhoneOutlined />
                          <div>{office.phone}</div>
                        </div>

                        <div css={styles.infoItem}>
                          <MailOutlined />
                          <div>{office.email}</div>
                        </div>
                      </div>
                    </div>
                    
                    <div style={{ borderTop: '1px solid #f0f0f0', paddingTop: 16, marginTop: 16 }}>
                      <div css={styles.infoItem} style={{ marginBottom: 0 }}>
                        <Text strong style={{ fontSize: '16px', minWidth: '80px' }}>営業時間:</Text>
                        <div style={{ marginLeft: 8 }}>{office.hours}</div>
                      </div>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
