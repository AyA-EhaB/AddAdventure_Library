from django import forms

class SignupForm(forms.Form):
    username = forms.CharField(max_length=50)
    password = forms.CharField(widget=forms.PasswordInput, max_length=50)
    confirm_password = forms.CharField(widget=forms.PasswordInput, max_length=50)
    email = forms.EmailField(max_length=200)
    user_type = forms.ChoiceField(choices=[('user', 'User'), ('admin', 'Admin')])
    
    def clean(self):
        cleaned_data = super().clean()
        password = cleaned_data.get("password")
        confirm_password = cleaned_data.get("confirm_password")
        
        if password != confirm_password:
            raise forms.ValidationError("Password and Confirm Password do not match.")
