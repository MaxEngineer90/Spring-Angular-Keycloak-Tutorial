<#import "template.ftl" as layout>
<@layout.registrationLayout; section>
    <@section.header>
        ${msg("registerTitle")}
    </@section.header>
    <@section.form>
        <form id="kc-register-form" class="${properties.kcFormClass!}" action="${url.registrationAction}" method="post">

            <div class="${properties.kcFormGroupClass!}">
                <label for="email" class="${properties.kcLabelClass!}">Email</label>
                <input type="text" id="email" name="email" value="${(register.formData['email']!'')}"
                       class="${properties.kcInputClass!}" autofocus/>
            </div>

            <div class="${properties.kcFormGroupClass!}">
                <label for="username" class="${properties.kcLabelClass!}">${msg("username")}</label>
                <input type="text" id="username" name="username" value="${(register.formData['username']!'')}"
                       class="${properties.kcInputClass!}" required autocomplete="username"/>
            </div>

            <div class="${properties.kcFormGroupClass!}">
                <label for="firstName" class="${properties.kcLabelClass!}">First Name</label>
                <input type="text" id="firstName" name="firstName" value="${(register.formData['firstName']!'')}"
                       class="${properties.kcInputClass!}"/>
            </div>
            <div class="${properties.kcFormGroupClass!}">
                <label for="lastName" class="${properties.kcLabelClass!}">Last Name</label>
                <input type="text" id="lastName" name="lastName" value="${(register.formData['lastName']!'')}"
                       class="${properties.kcInputClass!}"/>
            </div>

            <div class="${properties.kcFormGroupClass!}">
                <label for="password" class="${properties.kcLabelClass!}">${msg("password")}</label>
                <input type="password" id="password" name="password" class="${properties.kcInputClass!}" required
                       autocomplete="new-password"/>
            </div>
            <div class="${properties.kcFormGroupClass!}">
                <label for="password-confirm" class="${properties.kcLabelClass!}">${msg("passwordConfirm")}</label>
                <input type="password" id="password-confirm" name="password-confirm" class="${properties.kcInputClass!}"
                       required autocomplete="new-password"/>
            </div>

            <!-- Hinzufügen der neuen Felder hier -->
            <div class="${properties.kcFormGroupClass!}">
                <label for="address" class="${properties.kcLabelClass!}">Address</label>
                <input type="text" id="address" name="user.attributes.address"
                       value="${(register.formData['user.attributes.address']!'')}"
                       class="${properties.kcInputClass!}"/>
            </div>
            <div class="${properties.kcFormGroupClass!}">
                <label for="street" class="${properties.kcLabelClass!}">Postal Code</label>
                <input type="text" id="street" name="user.attributes.street"
                       value="${(register.formData['user.attributes.street']!'')}" class="${properties.kcInputClass!}"/>
            </div>

            <div class="${properties.kcFormGroupClass!}">
                <label for="city" class="${properties.kcLabelClass!}">City</label>
                <input type="text" id="city" name="user.attributes.city"
                       value="${(register.formData['user.attributes.city']!'')}" class="${properties.kcInputClass!}"/>
            </div>
            <div class="${properties.kcFormGroupClass!}">
                <label for="postalCode" class="${properties.kcLabelClass!}">Postal Code</label>
                <input type="text" id="postalCode" name="user.attributes.postalCode"
                       value="${(register.formData['user.attributes.postalCode']!'')}"
                       class="${properties.kcInputClass!}"/>
            </div>

            <!-- Datenschutzrichtlinien Zustimmung -->
            <div class="${properties.kcFormGroupClass!} ${properties.kcFormSettingClass!}">
                <div class="${properties.kcInputWrapperClass!}">
                    <input type="checkbox" id="privacyPolicy"
                           name="user.attributes.privacyPolicy" ${register.formData['user.attributes.privacyPolicy']!'checked'}
                           required/>
                    <label for="privacyPolicy"
                           class="${properties.kcLabelClass!}">${msg("privacyPolicyAgreement")}</label>
                </div>
            </div>

            <!-- Registrierungsbutton -->
            <div class="${properties.kcFormGroupClass!}">
                <input type="submit" class="${properties.kcButtonClass!} ${properties.kcButtonPrimaryClass!}"
                       value="${msg("doRegister")}"/>
            </div>
        </form>
    </@section.form>
</@layout.registrationLayout>