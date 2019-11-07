<template>
    <div>
        <child1></child1>
        <child2></child2>
    </div>
</template>

<script>

import Child1 from './child1'
import Child2 from './child2'
export default {
    name: 'Father',
    components: {
        Child1,
        Child2
    }
}
</script>
<style>

</style>
