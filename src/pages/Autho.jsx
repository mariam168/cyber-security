import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import "../styles/autho.css";
import {
    FaUser, FaEnvelope, FaLock, FaShieldAlt, FaNetworkWired, FaCodeBranch,
    FaFingerprint, FaDotCircle, FaKey, FaCheckCircle, FaTimesCircle, FaSpinner,
    FaAngleRight, FaAngleLeft, FaExclamationTriangle
} from "react-icons/fa";
import { FiCpu, FiActivity } from "react-icons/fi";


const stepVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
    exit: { opacity: 0, x: -50, transition: { duration: 0.3, ease: "easeIn" } }
};

const errorVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } }
};

const inputContainerVariants = {
    rest: { '--underline-scale': 0, '--glow-opacity': 0 },
    hover: { '--underline-scale': 1, '--glow-opacity': 0.1 },
    focus: { '--underline-scale': 1, '--glow-opacity': 0.2 }
};

const calculateStrength = (password) => {
    let strength = 0;
    if (!password || password.length === 0) return 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    return Math.min(strength, 5);
};

const analysisMessages = [
    { text: "Initializing connection...", duration: 1000 },
    { text: "Encrypting data stream...", duration: 1200 },
    { text: "Authenticating credentials...", duration: 1500 },
    { text: "Accessing secure node...", duration: 1000 },
    { text: "Verifying security layers...", duration: 1300 },
    { text: "Connection established.", duration: 500, final: true }
];

const registrationMessages = [
    { text: "Parsing agent data...", duration: 800 },
    { text: "Generating encryption keys...", duration: 1500 },
    { text: "Calculating biometric hash...", duration: 1200 },
    { text: "Establishing secure channel...", duration: 1000 },
    { text: "Registering agent on network...", duration: 1400 },
    { text: "Profile created successfully.", duration: 500, final: true }
];

const strengthColors = [
    '',
    'weak',
    'medium',
    'good',
    'strong',
    'very-strong'
];

const strengthLabels = [
    "Too Short",
    "Weak",
    "Medium",
    "Good",
    "Strong",
    "Very Strong"
];

const strengthLabelCssClasses = [
    "strength-label-empty",
    "strength-label-weak",
    "strength-label-medium",
    "strength-label-good",
    "strength-label-strong",
    "strength-label-very-strong"
];

export default function AuthForm() {
    const [isSignUp, setIsSignUp] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    const [analysisStatus, setAnalysisStatus] = useState({ message: '', progress: 0 });
    const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '', accessKey: '' });
    const [errors, setErrors] = useState({});
    const [validated, setValidated] = useState({});
    const [passwordStrength, setPasswordStrength] = useState(0);

    const navigate = useNavigate();

    useEffect(() => {
        setFormData({ name: '', email: '', password: '', confirmPassword: '', accessKey: '' });
        setErrors({});
        setValidated({});
        setPasswordStrength(0);
        setCurrentStep(1);
        setIsLoading(false);
        setAnalysisStatus({ message: '', progress: 0 });
    }, [isSignUp]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        setErrors(prev => {
            const newErrors = { ...prev };
            delete newErrors[name];
            return newErrors;
        });
        setValidated(prev => {
            const newValidated = { ...prev };
            delete newValidated[name];
            return newValidated;
        });

        if (name === 'password') {
            setPasswordStrength(calculateStrength(value));
            if (formData.confirmPassword) {
                validateField('confirmPassword', formData.confirmPassword);
            }
        }
        if (name === 'confirmPassword' || name === 'password') {
            if (formData.confirmPassword || value) {
                validateField('confirmPassword', name === 'confirmPassword' ? value : formData.confirmPassword);
            } else {
                setValidated(prev => { const newValidated = {...prev}; delete newValidated.confirmPassword; return newValidated; });
                setErrors(prev => { const newErrors = {...prev}; delete newErrors.confirmPassword; return newErrors; });
            }
        }
    };

    const validateField = (name, valueOverride = null) => {
        let error = null;
        const value = valueOverride !== null ? valueOverride : formData[name];
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        switch (name) {
            case 'name':
                if (!isSignUp) break;
                if (!value.trim()) error = "Codename/Handle is required.";
                else if (value.length < 3) error = "Codename must be at least 3 characters.";
                break;
            case 'email':
                if (!value.trim()) error = "Comms Channel (Email) is required.";
                else if (!emailRegex.test(value)) error = "Invalid email format.";
                break;
            case 'password':
                if (!value) error = "Passcode is required.";
                else if (value.length < 8) error = "Passcode must be at least 8 characters.";
                if (isSignUp && calculateStrength(value) < 3 && value.length >= 8) error = "Passcode is too weak.";
                 if (!isSignUp && value && value.length < 8) error = "Passcode must be at least 8 characters.";
                break;
            case 'confirmPassword':
                if (!isSignUp) break;
                if (!value) error = "Please confirm your passcode.";
                else if (value !== formData.password) error = "Passcodes do not match.";
                break;
            case 'accessKey':
                if (!isSignUp) break;
                if (!value.trim()) error = "Network Access Key is required.";
                else if (!/^[a-zA-Z0-9-]{10,}$/.test(value)) error = "Invalid Access Key format (min 10 alphanumeric/hyphen).";
                break;
            default:
                break;
        }

        if (error) {
            setErrors(prev => ({ ...prev, [name]: error }));
            setValidated(prev => {
                const newValidated = { ...prev };
                delete newValidated[name];
                return newValidated;
            });
        } else {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
            if (value && name !== 'confirmPassword' && name !== 'password' && name !== 'accessKey') {
                 setValidated(prev => ({ ...prev, [name]: true }));
            } else if (name === 'password' && value && value.length >= 8 && (!isSignUp || calculateStrength(value) >= 3)) {
                 setValidated(prev => ({ ...prev, [name]: true }));
            }
            else if (name === 'confirmPassword' && value && value === formData.password && isSignUp) {
                 setValidated(prev => ({ ...prev, [name]: true }));
            }
            else if (name === 'accessKey' && value && /^[a-zA-Z0-9-]{10,}$/.test(value) && isSignUp) {
                 setValidated(prev => ({ ...prev, [name]: true }));
            }
            else {
                 setValidated(prev => {
                     const newValidated = {...prev};
                     delete newValidated[name];
                     return newValidated;
                 });
             }
        }

        return !error;
    };

    const handleBlur = (e) => {
        const { name } = e.target;
        validateField(name);
    };

    const nextStep = () => {
        let isStepValid = true;
        if (currentStep === 1) {
            isStepValid = validateField('name');
        } else if (currentStep === 2) {
            const isEmailValid = validateField('email');
            const isPasswordValid = validateField('password');
            const isConfirmPasswordValid = validateField('confirmPassword');
            isStepValid = isEmailValid && isPasswordValid && isConfirmPasswordValid && !errors.email && !errors.password && !errors.confirmPassword;
        }

        if (isStepValid) {
            setCurrentStep(prev => prev + 1);
        }
    };

    const prevStep = () => {
        if (currentStep === 2) {
            setErrors(prev => { const newErrors = {...prev}; delete newErrors.email; delete newErrors.password; delete newErrors.confirmPassword; return newErrors; });
            setValidated(prev => { const newValidated = {...prev}; delete newValidated.email; delete newValidated.password; delete newValidated.confirmPassword; return newValidated; });
        } else if (currentStep === 3) {
            setErrors(prev => { const newErrors = {...prev}; delete newErrors.accessKey; return newErrors; });
            setValidated(prev => { const newValidated = {...prev}; delete newValidated.accessKey; return newValidated; });
        }
        setCurrentStep(prev => prev - 1);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isLoading) return;

        let isFormValid = true;
        let fieldsToValidateOnSubmit = [];

        if (isSignUp && currentStep === 3) {
            fieldsToValidateOnSubmit = ['name', 'email', 'password', 'confirmPassword', 'accessKey'];
        } else if (!isSignUp) {
            fieldsToValidateOnSubmit = ['email', 'password'];
        }

        fieldsToValidateOnSubmit.forEach(field => {
             if (!validateField(field, formData[field])) {
                  isFormValid = false;
             }
        });

        if (Object.keys(errors).length > 0) {
             isFormValid = false;
        }

        if (isFormValid) {
            setIsLoading(true);
            setAnalysisStatus({ message: "Initiating...", progress: 0 });

            const messages = isSignUp ? registrationMessages : analysisMessages;
            let cumulativeDelay = 0;

            messages.forEach((msg, index) => {
                setTimeout(() => {
                    setAnalysisStatus({
                        message: msg.text,
                        progress: Math.round(((index + 1) / messages.length) * 100)
                    });
                    if (msg.final) {
                        console.log("Simulation Complete. Form Data:", formData);
                        setTimeout(() => {
                            setIsLoading(false);
                            if (isSignUp) {
                                setTimeout(() => {
                                    navigate('/');
                                }, 800);
                            }
                          
                            if (!isSignUp) {
                                setTimeout(() => {
                                    navigate('/');
                                }, 800);
                            }
                        }, 1200);
                    }
                }, cumulativeDelay);
                cumulativeDelay += msg.duration;
            });

        } else {
            console.log("Validation Failed", errors);
             const firstErrorField = Object.keys(errors).find(field => errors[field]);
             if (firstErrorField) {
                 const inputElement = document.querySelector(`[name="${firstErrorField}"]`);
                 inputElement?.focus();
             } else {
                 if (isSignUp) {
                     if (currentStep === 1 && !validated.name) document.querySelector('[name="name"]')?.focus();
                     else if (currentStep === 2 && !validated.email) document.querySelector('[name="email"]')?.focus();
                     else if (currentStep === 2 && !validated.password) document.querySelector('[name="password"]')?.focus();
                     else if (currentStep === 2 && !validated.confirmPassword) document.querySelector('[name="confirmPassword"]')?.focus();
                     else if (currentStep === 3 && !validated.accessKey) document.querySelector('[name="accessKey"]')?.focus();
                 } else {
                     if (!validated.email) document.querySelector('[name="email"]')?.focus();
                     else if (!validated.password) document.querySelector('[name="password"]')?.focus();
                 }
             }
        }
    };

    const getInputClasses = (name) => {
        let base = "input-base";
        if (errors[name]) return `${base} input-error`;
        if (validated[name]) return `${base} input-success`;
        return `${base}`;
    };

    return (
        <div className="auth-container">

            <div className="absolute inset-0 z-0 pointer-events-none background-layers">
                 <div style={{ position: 'absolute', top: '15%', left: '10%', width: '100px', height: '100px', backgroundColor: 'rgba(15, 49, 142, 0.15)', borderRadius: '50%', filter: 'blur(20px)', animation: 'pulse 4s infinite', zIndex: -1 }}></div>
                 <div style={{ position: 'absolute', bottom: '20%', right: '15%', width: '120px', height: '120px', backgroundColor: 'rgba(34, 208, 48, 0.15)', borderRadius: '50%', filter: 'blur(25px)', animation: 'pulse 5s infinite reverse', zIndex: -1 }}></div>
                 <div style={{ position: 'absolute', top: '40%', right: '5%', width: '80px', height: '80px', backgroundColor: 'rgba(147, 51, 234, 0.15)', borderRadius: '50%', filter: 'blur(18px)', zIndex: -1 }}></div>

                 <div style={{ position: 'absolute', top: '5%', left: '40%', width: '250px', height: '1.5px', background: 'linear-gradient(90deg, transparent, rgba(34, 208, 48, 0.3), transparent)', transform: 'rotate(45deg)', transformOrigin: 'center', filter: 'blur(1px)', zIndex: -1 }}></div>
                 <div style={{ position: 'absolute', bottom: '10%', left: '20%', width: '200px', height: '1.5px', background: 'linear-gradient(90deg, transparent, rgba(15, 49, 142, 0.3), transparent)', transform: 'rotate(-30deg)', transformOrigin: 'center', filter: 'blur(1px)', zIndex: -1 }}></div>
                 <div style={{ position: 'absolute', top: '60%', right: '10%', width: '300px', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(147, 51, 234, 0.3), transparent)', transform: 'rotate(60deg)', transformOrigin: 'center', filter: 'blur(0.5px)', zIndex: -1 }}></div>

                  <div className="background-complexity-layer"></div>
            </div>


            <motion.div
                className="form-wrapper"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
                 <div className="corner-decorator tl"></div>
                 <div className="corner-decorator tr"></div>
                 <div className="corner-decorator bl"></div>
                 <div className="corner-decorator br"></div>

                <motion.div
                    className="form-title-icon"
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 150, damping: 15 }}
                >
                    <FaShieldAlt />
                </motion.div>

                <h2 className="form-title">
                    {isSignUp ? "Agent Registration Protocol" : "System Authentication Interface"}
                </h2>

                <form onSubmit={handleSubmit} className="form-content" noValidate>
                    <AnimatePresence>
                        {isLoading && (
                             <motion.div
                                 className="loading-overlay"
                                 initial={{ opacity: 0 }}
                                 animate={{ opacity: 1 }}
                                 exit={{ opacity: 0 }}
                                 transition={{ duration: 0.3 }}
                             >
                                 <div className="loading-content">
                                      <FiActivity className="loading-spinner" />
                                     <p className="loading-message">{analysisStatus.message}</p>
                                     <div className="loading-progress-bar-bg">
                                          <motion.div
                                              className="loading-progress-bar-fg"
                                              initial={{ width: 0 }}
                                              animate={{ width: `${analysisStatus.progress}%` }}
                                              transition={{ duration: 0.4, ease: "linear" }}
                                          />
                                     </div>
                                 </div>
                             </motion.div>
                        )}
                    </AnimatePresence>

                    <div style={{ position: 'relative', overflow: 'hidden', minHeight: isSignUp ? '300px' : '180px' }}>
                        <AnimatePresence mode="wait">
                            {!isSignUp && (
                                <motion.div
                                    key="signin"
                                    variants={stepVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    className="form-fields-container"
                                >
                                    <motion.div className="input-field-container" variants={inputContainerVariants} initial="rest" whileHover="hover" whileFocusWithin="focus">
                                        <FaEnvelope className="input-icon" />
                                        <input id="email-signin" type="email" name="email" placeholder="Registered Comms Channel" value={formData.email} onChange={handleChange} onBlur={handleBlur} className={getInputClasses('email')} disabled={isLoading} required />
                                        {validated.email && <FaCheckCircle className="input-status-icon input-success-icon" />}
                                        {errors.email && <FaTimesCircle className="input-status-icon input-error-icon" />}
                                        <div className="input-underline"></div>
                                    </motion.div>
                                    <AnimatePresence>
                                        {errors.email && <motion.p key="email-error" variants={errorVariants} initial="hidden" animate="visible" exit="exit" className="error-message"><FaExclamationTriangle /> {errors.email}</motion.p>}
                                    </AnimatePresence>

                                    <motion.div className="input-field-container" variants={inputContainerVariants} initial="rest" whileHover="hover" whileFocusWithin="focus">
                                        <FaLock className="input-icon" />
                                        <input id="password-signin" type="password" name="password" placeholder="Authentication Passcode" value={formData.password} onChange={handleChange} onBlur={handleBlur} className={getInputClasses('password')} disabled={isLoading} required />
                                        {validated.password && <FaCheckCircle className="input-status-icon input-success-icon" />}
                                        {errors.password && <FaTimesCircle className="input-status-icon input-error-icon" />}
                                        <div className="input-underline"></div>
                                    </motion.div>
                                    <AnimatePresence>
                                        {errors.password && <motion.p key="password-error" variants={errorVariants} initial="hidden" animate="visible" exit="exit" className="error-message"><FaExclamationTriangle /> {errors.password}</motion.p>}
                                    </AnimatePresence>
                                </motion.div>
                            )}

                            {isSignUp && (
                                <>
                                    {currentStep === 1 && (
                                        <motion.div key="step1" variants={stepVariants} initial="hidden" animate="visible" exit="exit" className="form-fields-container">
                                            <h3 className="step-title">Step 1: Agent Identification</h3>
                                            <motion.div className="input-field-container" variants={inputContainerVariants} initial="rest" whileHover="hover" whileFocusWithin="focus">
                                                <FaUser className="input-icon" />
                                                <input id="name-signup" type="text" name="name" placeholder="Codename / Handle" value={formData.name} onChange={handleChange} onBlur={handleBlur} className={getInputClasses('name')} disabled={isLoading} required />
                                                {validated.name && <FaCheckCircle className="input-status-icon input-success-icon" />}
                                                {errors.name && <FaTimesCircle className="input-status-icon input-error-icon" />}
                                                <div className="input-underline"></div>
                                            </motion.div>
                                            <AnimatePresence>
                                                {errors.name && <motion.p key="name-error" variants={errorVariants} initial="hidden" animate="visible" exit="exit" className="error-message"><FaExclamationTriangle /> {errors.name}</motion.p>}
                                            </AnimatePresence>
                                        </motion.div>
                                    )}
                                    {currentStep === 2 && (
                                        <motion.div key="step2" variants={stepVariants} initial="hidden" animate="visible" exit="exit" className="form-fields-container">
                                            <h3 className="step-title">Step 2: Secure Credentials</h3>
                                            <motion.div className="input-field-container" variants={inputContainerVariants} initial="rest" whileHover="hover" whileFocusWithin="focus">
                                                <FaEnvelope className="input-icon" />
                                                <input id="email-signup" type="email" name="email" placeholder="Secure Comms Channel (Email)" value={formData.email} onChange={handleChange} onBlur={handleBlur} className={getInputClasses('email')} disabled={isLoading} required />
                                                {validated.email && <FaCheckCircle className="input-status-icon input-success-icon" />}
                                                {errors.email && <FaTimesCircle className="input-status-icon input-error-icon" />}
                                                <div className="input-underline"></div>
                                            </motion.div>
                                            <AnimatePresence>
                                                {errors.email && <motion.p key="email-signup-error" variants={errorVariants} initial="hidden" animate="visible" exit="exit" className="error-message"><FaExclamationTriangle /> {errors.email}</motion.p>}
                                            </AnimatePresence>

                                            <motion.div className="input-field-container" variants={inputContainerVariants} initial="rest" whileHover="hover" whileFocusWithin="focus">
                                                <FaLock className="input-icon" />
                                                <input id="password-signup" type="password" name="password" placeholder="Encryption Passcode" value={formData.password} onChange={handleChange} onBlur={handleBlur} className={getInputClasses('password')} disabled={isLoading} required />
                                                {validated.password && <FaCheckCircle className="input-status-icon input-success-icon" />}
                                                {errors.password && <FaTimesCircle className="input-status-icon input-error-icon" />}
                                                <div className="input-underline"></div>
                                            </motion.div>
                                            <div className="password-strength-bar">
                                                 {[...Array(5)].map((_, i) => (
                                                     <motion.div
                                                         key={i}
                                                         className={`strength-segment ${i < passwordStrength ? strengthColors[passwordStrength] : 'empty'}`}
                                                     />
                                                 ))}
                                            </div>
                                             <p className={`strength-label ${strengthLabelCssClasses[passwordStrength]}`}>
                                                {strengthLabels[passwordStrength]}
                                            </p>
                                            <AnimatePresence>
                                                {errors.password && errors.password !== "Passcode is too weak." && <motion.p key="password-signup-error" variants={errorVariants} initial="hidden" animate="visible" exit="exit" className="error-message"><FaExclamationTriangle /> {errors.password}</motion.p>}
                                            </AnimatePresence>


                                            <motion.div className="input-field-container" variants={inputContainerVariants} initial="rest" whileHover="hover" whileFocusWithin="focus">
                                                <FaKey className="input-icon" />
                                                <input id="confirmPassword-signup" type="password" name="confirmPassword" placeholder="Confirm Passcode" value={formData.confirmPassword} onChange={handleChange} onBlur={handleBlur} className={getInputClasses('confirmPassword')} disabled={isLoading} required />
                                                {validated.confirmPassword && <FaCheckCircle className="input-status-icon input-success-icon" />}
                                                {errors.confirmPassword && <FaTimesCircle className="input-status-icon input-error-icon" />}
                                                <div className="input-underline"></div>
                                            </motion.div>
                                            <AnimatePresence>
                                                {errors.confirmPassword && <motion.p key="confirmPassword-error" variants={errorVariants} initial="hidden" animate="visible" exit="exit" className="error-message"><FaExclamationTriangle /> {errors.confirmPassword}</motion.p>}
                                            </AnimatePresence>
                                        </motion.div>
                                    )}
                                    {currentStep === 3 && (
                                        <motion.div key="step3" variants={stepVariants} initial="hidden" animate="visible" exit="exit" className="form-fields-container">
                                            <h3 className="step-title">Step 3: Network Integration</h3>
                                             <motion.div className="input-field-container" variants={inputContainerVariants} initial="rest" whileHover="hover" whileFocusWithin="focus">
                                                 <FaNetworkWired className="input-icon" />
                                                 <input id="accessKey-signup" type="text" name="accessKey" placeholder="Network Access Key" value={formData.accessKey} onChange={handleChange} onBlur={handleBlur} className={getInputClasses('accessKey')} disabled={isLoading} required />
                                                 {validated.accessKey && <FaCheckCircle className="input-status-icon input-success-icon" />}
                                                 {errors.accessKey && <FaTimesCircle className="input-status-icon input-error-icon" />}
                                                 <div className="input-underline"></div>
                                             </motion.div>
                                             <AnimatePresence>
                                                 {errors.accessKey && <motion.p key="accessKey-error" variants={errorVariants} initial="hidden" animate="visible" exit="exit" className="error-message"><FaExclamationTriangle /> {errors.accessKey}</motion.p>}
                                             </AnimatePresence>

                                            <div className="biometric-container">
                                                <FaFingerprint className="biometric-icon" />
                                                <p className="biometric-text">Biometric Signature Simulation</p>
                                                <div className="biometric-scanline"></div>
                                                {/* Add more simulated biometric elements here if needed */}
                                            </div>
                                        </motion.div>
                                    )}
                                </>
                            )}
                        </AnimatePresence>
                    </div>

                    <div className="form-actions">
                        {!isSignUp && (
                            <button type="submit" className="submit-button primary-button" disabled={isLoading}>
                                {isLoading ? <FaSpinner className="button-spinner" /> : <FaKey />}
                                Authenticate
                            </button>
                        )}

                        {isSignUp && (
                            <>
                                {currentStep < 3 && (
                                    <div className="step-navigation">
                                        {currentStep > 1 && (
                                            <button type="button" onClick={prevStep} className="step-button prev-button" disabled={isLoading}>
                                                <FaAngleLeft /> Previous
                                            </button>
                                        )}
                                        <button type="button" onClick={nextStep} className={`step-button primary-button ${currentStep === 1 ? 'full-width-button' : ''}`} disabled={isLoading}>
                                            Next <FaAngleRight />
                                        </button>
                                    </div>
                                )}
                                {currentStep === 3 && (
                                    <div className="step-navigation">
                                        <button type="button" onClick={prevStep} className="step-button prev-button" disabled={isLoading}>
                                            <FaAngleLeft /> Back
                                        </button>
                                        <button type="submit" className="submit-button primary-button" disabled={isLoading}>
                                             {isLoading ? <FaSpinner className="button-spinner" /> : <FaCheckCircle />}
                                            Register Agent
                                        </button>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                </form>

                <div className="toggle-section">
                    {isSignUp ? "Already have credentials?" : "Need system access?"}
                    <button onClick={() => setIsSignUp(!isSignUp)} className="toggle-link" disabled={isLoading}>
                        {isSignUp ? "Authenticate" : "Register Agent"}
                    </button>
                </div>
            </motion.div>
        </div>
    );
}