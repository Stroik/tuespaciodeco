export default function Register() {
  const inputStyle = 'border border-slate-400 rounded-md p-2 text-slate-900 bg-slate-50';
  return (
    <form className="border p-6 rounded-md bg-slate-50">
      <h3 className="mb-4 text-2xl">Register</h3>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <input type="text" name="username" id="username" className={inputStyle} placeholder="Usuario" />
        <input type="email" name="email" id="email" className={inputStyle} placeholder="Correo Electrónico" />
        <input type="password" name="password" id="password" className={inputStyle} placeholder="Contraseña" />
        <input type="password" name="repassword" id="repassword" className={inputStyle} placeholder="Repetir contraseña" />
      </div>

      <button type="submit" className="rounded-md px-4 py-2 text-white bg-sky-600">Register</button>
    </form>
  );
}
