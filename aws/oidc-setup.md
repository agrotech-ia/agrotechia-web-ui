# GitHub Actions + AWS OIDC

Configuración recomendada para desplegar desde GitHub Actions sin credenciales guardadas en secretos.

## Secretos requeridos

- `AWS_ROLE_TO_ASSUME`: ARN del rol IAM que GitHub Actions asumirá.
- `AWS_REGION`: región de AWS.
- `S3_BUCKET`: bucket de destino para los archivos estáticos.
- `CLOUDFRONT_DISTRIBUTION_ID`: ID de la distribución CloudFront.
- `SONARQUBE_HOST_URL`: URL de SonarQube (opcional).
- `SONARQUBE_TOKEN`: token de SonarQube (opcional).

## Rol OIDC recomendado

Usa `aws/oidc-role-template.json` como plantilla de política de confianza para el rol.

El rol debe permitir acciones como:

- `s3:ListBucket`
- `s3:GetObject`
- `s3:PutObject`
- `s3:DeleteObject`
- `cloudfront:CreateInvalidation`

## Flujo

1. GitHub Actions obtiene un token OIDC.
2. `aws-actions/configure-aws-credentials` asume el rol desde AWS.
3. El workflow construye la app y sincroniza `dist` con S3.
4. Se crea una invalidación de CloudFront para servir la versión nueva.
