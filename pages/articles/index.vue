<script>
export default {
  middleware({ redirect }) {
    return redirect('301', '/articles/page/1');
  },
};
</script>
