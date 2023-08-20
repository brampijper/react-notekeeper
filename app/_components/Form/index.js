export default function Form({form, handleFormChange, onSubmit}) {
  return (
    <form 
      onSubmit={onSubmit}
      className="flex flex-col gap-12"
    >
      <input
        type="email"
        placeholder="email"
        name="email"
        value={form.email}
        onChange={handleFormChange}
        className="border-2 p-2 rounded-md"
        autoComplete="email"
        required
      />
      <input
        type="password"
        placeholder="password"
        name="password"
        value={form.password}
        onChange={handleFormChange}
        className="border-2 p-2 rounded-md"
        minLength="12"
        autoComplete="current-password"
        required
      />
      <button className="bg-slate-200 rounded-xl p-2 hover:bg-slate-300">
        log-in
      </button>
    </form>
  )
}