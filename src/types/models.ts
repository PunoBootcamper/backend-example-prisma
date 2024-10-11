import { 
    UserRole, 
    UserStatus, 
    PreferredLanguage, 
    PetStatus, 
    AnimalType, 
    Gender, 
    Size, 
    AdoptionStatus, 
    ReportStatus 
  } from './enums';
  
  export type User = {
    id: number;
    nombre: string;
    apellido: string;
    pais: string;
    foto_perfil: string;
    direccion: string;
    numero_contacto: string;
    fecha_nacimiento: Date;
    correo: string;
    contrasena: string;
    role: UserRole;
    idioma_preferido: PreferredLanguage;
    modo_oscuro: boolean;
    doble_autenticacion: boolean;
    estado: UserStatus;
    created_at: Date;
    updated_at: Date;
  }
  
  export type Pet = {
    id: number;
    nombre: string;
    tipo_animal: AnimalType;
    raza: string;
    pelaje: string;
    color_ojos: string;
    sexo: Gender;
    fecha_nacimiento: Date;
    tamano: Size;
    estado: PetStatus;
    descripcion: string;
    imagen_url: string;
    validado: boolean;
    owner_id: number;
    created_at: Date;
    updated_at: Date;
  }
  
  export type Post = {
    id: number;
    user_id: number;
    pet_id: number;
    titulo: string;
    descripcion: string;
    ubicacion: string;
    estado: PetStatus;
    created_at: Date;
    updated_at: Date;
  }
  
  export type Comment = {
    id: number;
    post_id: number;
    user_id: number;
    contenido: string;
    created_at: Date;
  }
  
  export type AdoptionRequest = {
    id: number;
    pet_id: number;
    adopter_id: number;
    estado: AdoptionStatus;
    created_at: Date;
    updated_at: Date;
  }
  
  export type Report = {
    id: number;
    tipo_elemento: string; // 'post', 'comment', 'user'
    elemento_id: number;
    reported_by: number;
    razon: string;
    estado: ReportStatus;
    created_at: Date;
    updated_at: Date;
  }
  
  export type Notification = {
    id: number;
    user_id: number;
    mensaje: string;
    leido: boolean;
    created_at: Date;
  }
  
  export type Message = {
    id: number;
    sender_id: number;
    receiver_id: number;
    contenido: string;
    sent_at: Date;
  }
  
  export type UserFollow = {
    follower_id: number;
    followed_id: number;
    created_at: Date;
  }
  
  export type Favorite = {
    user_id: number;
    post_id: number;
    created_at: Date;
  }
  
  export type Sighting = {
    id: number;
    pet_id: number;
    user_id: number;
    latitud: number;
    longitud: number;
    descripcion: string;
    created_at: Date;
  }
  