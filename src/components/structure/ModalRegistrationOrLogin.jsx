import React, { useEffect, useState } from "react";
import InputMask from "react-input-mask";

const ModalRegistrationOrLogin = ({ isOpen, onClose, type = "login" }) => {
  const [isLogin, setIsLogin] = useState(type === "login");
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    emailCpf: "",
    password: "",
    nome: "",
    cpf: "",
    nascimento: "",
    telefone: "",
    senhaCadastro: "",
    confirmarSenha: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Atualiza tipo ao receber props externas
    setIsLogin(type === "login");
    setStep(1);
    setFormData({
      emailCpf: "",
      password: "",
      nome: "",
      cpf: "",
      nascimento: "",
      telefone: "",
      senhaCadastro: "",
      confirmarSenha: "",
    });
    setErrors({});
  }, [type, isOpen]);

  const handleToggle = () => {
    setIsLogin(!isLogin);
    setStep(1);
    setFormData({
      emailCpf: "",
      password: "",
      nome: "",
      cpf: "",
      nascimento: "",
      telefone: "",
      senhaCadastro: "",
      confirmarSenha: "",
    });
    setErrors({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: null });
  };

  const validateLogin = () => {
    let newErrors = {};
    if (!formData.emailCpf) newErrors.emailCpf = "Digite seu CPF ou e-mail";
    if (!formData.password) newErrors.password = "Digite sua senha";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateCadastroStep1 = () => {
    let newErrors = {};
    if (!formData.nome) newErrors.nome = "Digite seu nome completo";
    if (!formData.cpf) newErrors.cpf = "Digite seu CPF";
    if (!formData.nascimento) newErrors.nascimento = "Selecione sua data de nascimento";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateCadastroStep2 = () => {
    let newErrors = {};
    if (!formData.telefone) newErrors.telefone = "Digite seu telefone";
    if (!formData.senhaCadastro) newErrors.senhaCadastro = "Digite sua senha";
    if (formData.senhaCadastro !== formData.confirmarSenha)
      newErrors.confirmarSenha = "As senhas não coincidem";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = () => {
    if (validateLogin()) {
      alert("Login realizado! 🚀");
      onClose();
    }
  };

  const handleCadastro = () => {
    if (step === 1 && validateCadastroStep1()) setStep(2);
    else if (step === 2 && validateCadastroStep2()) {
      alert("Cadastro concluído! 🎉");
      onClose();
    }
  };

  const renderInput = (name, type, placeholder) => (
    <div>
      <input
        type={type}
        name={name}
        className={`form-control input-modal ${errors[name] ? "is-invalid" : ""}`}
        placeholder={placeholder}
        value={formData[name] || ""}
        onChange={handleChange}
      />
      {errors[name] && <p className="invalid-feedback text-start">{errors[name]}</p>}
    </div>
  );

  const renderMaskedInput = (name, mask, placeholder) => (
    <div>
      <InputMask mask={mask} name={name} value={formData[name] || ""} onChange={handleChange}>
        {(inputProps) => (
          <input
            {...inputProps}
            type="text"
            className={`form-control input-modal ${errors[name] ? "is-invalid" : ""}`}
            placeholder={placeholder}
          />
        )}
      </InputMask>
      {errors[name] && <p className="invalid-feedback text-start">{errors[name]}</p>}
    </div>
  );

  if (!isOpen) return null;

  return (
    <div
      aria-hidden={!isOpen}
      className="fade modal show"
      tabIndex="-1"
      id="modalRegistrationOrLogin"
      style={{ display: isOpen ? "block" : "none", backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog">
        <div className="modal-content p-3 pe-4 ps-4 rounded-4">
          {/* Header */}
          <div className="border-0 mb-0 modal-header">
            <button aria-label="Fechar" className="btn-close btn-sm" type="button" onClick={onClose}></button>
          </div>

          {/* Body */}
          <div className="d-flex flex-column gap-3 modal-body text-center">
            <h4 className="ff-roundend modal-title">
              {isLogin ? "Faça seu login" : "Criar sua conta"}
            </h4>

            {isLogin ? (
              <>
                {renderInput("emailCpf", "text", "CPF ou E-mail")}
                {renderInput("password", "password", "Senha")}

                <p className="text-iris-purple text-end">Esqueceu a senha?</p>

                <button
                  className="border-0 btn-gradient btn-primary-format mt-3 text-white w-100"
                  type="button"
                  onClick={handleLogin}
                >
                  Login
                </button>
              </>
            ) : (
              <>
                {step === 1 && (
                  <>
                    {renderInput("nome", "text", "Nome completo")}
                    {renderMaskedInput("cpf", "999.999.999-99", "CPF")}
                    {renderMaskedInput("nascimento", "99/99/9999", "Data de nascimento")}

                    <button
                      className="border-0 btn-gradient btn-primary-format mt-3 text-white w-100"
                      type="button"
                      onClick={handleCadastro}
                    >
                      Próxima etapa
                    </button>
                  </>
                )}

                {step === 2 && (
                  <>
                    {renderMaskedInput("telefone", "(99) 99999-9999", "Telefone")}
                    {renderInput("senhaCadastro", "password", "Senha")}
                    {renderInput("confirmarSenha", "password", "Confirmar senha")}

                    <button
                      className="border-0 btn-gradient btn-primary-format mt-3 text-white w-100"
                      type="button"
                      onClick={handleCadastro}
                    >
                      Cadastre-se
                    </button>
                  </>
                )}
              </>
            )}

            {/* Redes sociais */}
            <div className="mt-3">
              <p className="mb-3 text-muted">Ou continue com</p>
              <div className="align-items-end d-flex flex-row gap-2 justify-content-center">
                <button className="border-0 bg-transparent">
                  <img
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    alt="Login com Google"
                    width="32"
                    height="32"
                  />
                </button>
                <button className="border-0 bg-transparent">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
                    alt="Login com Microsoft"
                    width="32"
                    height="32"
                  />
                </button>
                <button className="border-0 bg-transparent">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                    alt="Login com Apple"
                    width="32"
                    height="32"
                  />
                </button>
              </div>
            </div>

            {/* Alternar entre login e cadastro */}
            <div className="d-flex flex-row gap-1 justify-content-center mt-3">
              {isLogin ? (
                <>
                  <p className="text-muted">Não tem uma conta? </p>
                  <button className="btn btn-link p-0" type="button" onClick={handleToggle}>
                    Cadastre-se
                  </button>
                </>
              ) : (
                <>
                  <p className="text-muted">Já tem conta? </p>
                  <button className="btn btn-link p-0" type="button" onClick={handleToggle}>
                    Entrar
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalRegistrationOrLogin;
