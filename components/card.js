export default {
    name: 'Card',
    props: {
        cambio: {
            type: Object,
            required: true
        }
    },
    template: `
    <div class="card">
        <p class="card-title">{{ currency[converted].name }}</p>
        <ul class="card-description">
            <li>Moeda Base : {{ currency[converted].code }}</li>
            <li>Moeda Referencia: {{ currency[converted].codein }}</li>
            <li>Alta da Moeda: {{ currency[converted].high }}</li>
        </ul>
    </div>`
}