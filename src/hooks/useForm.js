import { useState } from "react";

const PHONE_REGEX = /^(?:\+84|0)[35789]\d{8}$/;

export default function useForm(initialValues, webhookUrl, validateFields, onSuccessCallback) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear field-specific error as user typing
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
    setSuccess(false);
    setSubmitError(null);
  };

  const validate = () => {
    const newErrors = {};
    Object.keys(initialValues).forEach((key) => {
      const val = values[key]?.toString().trim();
      if (!val) {
        newErrors[key] = "Trường này không được để trống";
      } else if (key === "phone" || key === "tel" || key === "phoneZalo") {
        const cleanPhone = val.replace(/\s+/g, "").replace(/-+/g, "");
        if (!PHONE_REGEX.test(cleanPhone)) {
          newErrors[key] = "Số điện thoại không hợp lệ (nhập 10 chữ số, vd: 0936643146)";
        }
      }
    });

    if (validateFields) {
      const customErrors = validateFields(values);
      Object.assign(newErrors, customErrors);
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    setSubmitError(null);
    setSuccess(false);

    if (!validate()) {
      return false;
    }

    setLoading(true);
    try {
      const response = await fetch(webhookUrl || "https://httpbin.org/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...values,
          submittedAt: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error(`Server returned status ${response.status}`);
      }

      setSuccess(true);
      if (onSuccessCallback) {
        onSuccessCallback(values);
      }
      return true;
    } catch (err) {
      console.error("Form submission error:", err);
      setSubmitError("Đã xảy ra lỗi khi gửi thông tin. Vui lòng thử lại sau.");
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    values,
    errors,
    loading,
    success,
    submitError,
    handleChange,
    handleSubmit,
    resetForm,
    setValues,
  };
}
